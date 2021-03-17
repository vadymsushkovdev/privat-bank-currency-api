import * as Joi from 'joi';
import { IUserService } from './interfaces/interface';
import UserModel, { IUserModel } from './models/model';
import UserValidation from './validations/validation';

/**
 * @export
 * @implements {IUserServiceService}
 */
const UserService: IUserService = {

    /**
     * @param {IUserModel} body
     * @returns {Promise <IUserModel>}
     * @memberof AuthService
     */
    async createUser(body: IUserModel): Promise < IUserModel > {
        try {
            const validate: Joi.ValidationResult < IUserModel > = UserValidation.createUser(body);

            if (validate.error) { throw new Error(validate.error.message); }

            const user: IUserModel = new UserModel({ email: body.email, password: body.password });
            const query: IUserModel = await UserModel.findOne({ email: body.email });

            if (query) { throw new Error('This email already exists'); }

            const saved: IUserModel = await user.save();

            return saved;
        } catch (error) {
            throw new Error(error);
        }
    }
};

export default UserService;
