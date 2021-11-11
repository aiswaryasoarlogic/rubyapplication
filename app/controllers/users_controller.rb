class UsersController < ApplicationController
    
    def index
    end

    def userlogin
    end

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            data={
                    registered: true
            }
                render json:data
        else
            flash[:register_errors] = user.errors.full_messages
            data={
                    registered: true
            }
                session[:user_id] = user.id
                render json:data
        end
    end

    private
        def user_params
            params.require(:user).permit(:name, :email, :password, :password_confirmation, :phone, :profession)

        end
end
