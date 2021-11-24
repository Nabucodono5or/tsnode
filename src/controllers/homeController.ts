import { Request, Response } from 'express';

class HomeController {
    public home(req: Request, res: Response) {
        return res.send('Hello World');
    }
}

export default new HomeController();
