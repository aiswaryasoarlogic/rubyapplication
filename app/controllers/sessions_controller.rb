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

    def getuser
        user = User.find(session[:user_id])
        data = {
                userdata: user
            }
        render json:data
    end

    def update
        user = User.find(session[:user_id])
        if user.update(update_params)
            data={
                  updated: true
              }
              render json:data
        else
            data={
                  updated: false
              }
              render json:data
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

    def listuser
        userlist = User.all.order(created_at: :desc)
        render json: userlist
    end

    def deleteuser
        user = User.find(params[:userid])
        # pages = Subpage.where(pageid: params[:pageid])
        # pages.destroy_all
        user.destroy
        data={
          deleted: true
        }
        render json:data
    
    end

    private
        def login_params
            params.require(:login).permit(:email, :password)
        end

    private
        def user_params
            params.require(:user).permit(:name, :email, :password, :password_confirmation, :phone, :profession, :image)

        end

    private
        def update_params
            params.require(:user).permit(:name, :email,  :phone, :profession, :address, :image)

        end

        

end
