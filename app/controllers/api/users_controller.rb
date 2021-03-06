class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(
      :first,
      :last,
      :email,
      :password,
      :city,
      :state,
      :country,
      :occupation,
      :image_url,
      :age,
      :about,
      languages: []
    )
  end

end
