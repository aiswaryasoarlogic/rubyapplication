class CreateCreatepages < ActiveRecord::Migration[6.1]
  def change
    create_table :createpages do |t|
      t.string :title
      t.string :pagetitle
      t.string :keywords
      t.text :metadescription
      t.text :description
      t.string :image, default: 'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png'
      t.timestamps
    end
  end
end
