class Api::V1::CreatepagesController < ApplicationController
  def index
    recipe = Createpage.all.order(created_at: :desc)
    render json: recipe
  end

  def create
    page = Createpage.new(page_params)
        if page.save
          data={
              created: true
          }
          render json:data
        else
            # flash[:register_errors] = user.errors.full_messages
            # redirect_to '/'
            data={
              created: false
          }
          render json:data
        end
        # user = User.create!(user_params)
        # session[:user_id] = user.id
        # redirect_to '/dashboard'
  end

  def show
    page = Createpage.find_by(id:pagedata_params[:id] )
    render json:page

  end

  # def destroy
  # end

  def listpage
    pages = Createpage.where(userid: session[:user_id])
    render json:pages
  end

  def updatepage
    page = Createpage.find(params[:pageid])
    if page.update(page_params)
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
    page = Createpage.find(params[:pageid])
    pages = Subpage.where(pageid: params[:pageid])
    pages.destroy_all
    page.destroy
    data={
      deleted: true
    }
    render json:data

  end

  private
    def page_params
        params.require(:page).permit(:userid, :title, :pagetitle, :keywords, :metadescription, :description, :image)

    end

  private
      def pagedata_params
          params.require(:page).permit(:id)
      end
end
