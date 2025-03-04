import { promises as fs } from 'fs';
import path from 'path';
import { authOptions } from '../../../pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

export default async function handler(req, res) {
    if (req.method == 'GET') {
        //Verify that the user is logged in.
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session) {
            // res.status(401).json({ message: 'You must be logged in.' });
            res.status(401).end();
            return;
        }

        try {
            //console.log('API call (GET)');
            //Find the absolute path of the json directory
            const jsonDirectory = path.join(process.cwd(), '/config');
            //Read the json data file data.json
            let repoList = await fs.readFile(
                jsonDirectory + '/repo.json',
                'utf8'
            );
            //Parse the JSON
            repoList = JSON.parse(repoList);
            //Send the response
            res.status(200).json({ repoList });
        } catch (error) {
            //Log for backend
            console.log(error);
            //Log for frontend
            if (error.code == 'ENOENT') {
                res.status(500).json({
                    status: 500,
                    message: 'No such file or directory',
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message: 'API error, contact the administrator !',
                });
            }
            return;
        }
    }
}
