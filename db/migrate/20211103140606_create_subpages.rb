class CreateSubpages < ActiveRecord::Migration[6.1]
  def change
    create_table :subpages do |t|
      t.string :title
      t.string :pagetitle
      t.string :keywords
      t.text :metadescription
      t.text :description
      t.string :image
      t.integer :userid
      t.integer :pageid

      t.timestamps
    end
  end
end
