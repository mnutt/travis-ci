class RefactorUsernameToUserId < ActiveRecord::Migration
  def self.up
    add_column :repositories, :user_id, :integer, :null => false
    add_index :repositories, :user_id

    Repository.find_each do |repository|
      user = User.find_by_username(repository.username)
      repository.update_attribute(:user_id, user.id)
    end

    remove_column :repositories, :username
  end

  def self.down
    add_column :repositories, :username

    Repository.find_each do |repository|
      repository.update_attribure(username, repository.user.name)
    end

    remove_index :repositories, :user_id
    remove_column :repositories, :user_id
  end
end
