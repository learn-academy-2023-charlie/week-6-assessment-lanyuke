# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) this is the contorller name blog_posts_controller.rb, it store all methods for http request.
class BlogPostsController < ApplicationController
  def index
    # ---2)this will display all data for table BlogPost.
    @posts = BlogPost.all
  end

  # ---3)this will allow us to display a spceific data in table using params in the end of url with data id. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)this is for displaying a page to create new post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)this is for function that use to create post with strong params requirement.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)this is displaying a specific data when user trying to edit the post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)this is a function that use to edit the post with strong params.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)this will diplay the data user just deleted
      redirect_to blog_posts_path
    end
  end

  # ---9)private is for storing the logic that can only be using in this class. 
  private
  def blog_post_params
    # ---10)this in providing a stander for the params requirement.
    params.require(:blog_post).permit(:title, :content)
  end
end
