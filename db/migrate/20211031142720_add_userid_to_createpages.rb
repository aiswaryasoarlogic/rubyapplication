class AddUseridToCreatepages < ActiveRecord::Migration[6.1]
  def change
    add_column :createpages, :userid, :integer
  end
end
