class SessionsController < ApplicationController
    def create
        user = User.find_by(email:login_params[:email])
        if user && user.authenticate(login_params[:password])
            
            data={
                loggedIn: true,
                userId: user.id
            }
            session[:user_id] = user.id
            render json:data
        else
            data = {
                loggedIn: false
            }
            render json:data

            # redirect_to '/userlogin', alert: "invlid credentials"
            # flash[:login_errors] = ['invalid credentials']
            # flash.now[:alert] = 'User not found!'
            
            # flash[:alert] = "User not found."
            # redirect_to '/'
        end
    end

    def checklogged
        if session[:user_id]
            data = {
                loggedIn: true
            }
            render json:data
        else
            data = {
                loggedIn: false
            }
            render json:data
        end
    end

            

    def update
        user = User.find(session[:user_id])
        if user.update(user_params)
            redirect_to '/dashboard'
        else
            flash[:login_errors] = ['invalid credentials']
            redirect_to '/dashboard'
        end
    end

    

    def destroy
        session[:user_id] = nil
        redirect_to '/', notice: "Logged out!"
    end

    def admindestroy
        session[:user_id] = nil
        redirect_to '/admin', notice: "Logged out!"
    end

    private
        def login_params
            params.require(:login).permit(:email, :password)
        end

    private
        def user_params
            params.require(:user).permit(:name, :email, :password, :password_confirmation, :phone, :profession, :image)

        end

        

end
