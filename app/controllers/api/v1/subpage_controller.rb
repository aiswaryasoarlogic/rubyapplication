class Api::V1::SubpageController < ApplicationController
  def index
  end

  def create
    page = Subpage.new(page_params)
        if page.save
          data={
              created: true
          }
          render json:data
        else
            data={
              created: false
          }
          render json:data
        end
  end

  def listsubpage
    pages = Subpage.where(pageid: params[:pageid])
    render json:pages
  end

  # def show
  # end

  def show
    page = Subpage.find_by(id: params[:pageid] )
    render json:page

  end

  def destroy
    page = Subpage.find(params[:pageid])
    page.destroy
    data={
      deleted: true
    }
    render json:data

  end

  private
    def page_params
        params.require(:page).permit(:userid, :pageid, :title, :pagetitle, :keywords, :metadescription, :description, :image)

    end
end
