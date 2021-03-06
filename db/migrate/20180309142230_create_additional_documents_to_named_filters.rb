class CreateAdditionalDocumentsToNamedFilters < ActiveRecord::Migration[5.1]
  def change
    create_table :named_filter_additional_documents do |t|
      t.integer :named_filter_id
      t.integer :document_id
    end

    add_index :named_filter_additional_documents, :named_filter_id, name: 'n_f_add_doc_nam_fil'
    add_index :named_filter_additional_documents, :document_id, name: 'n_f_add_doc_doc_id'
    add_index :named_filter_additional_documents, [:named_filter_id, :document_id], unique: true, name: 'n_f_add_doc_nam_fil_doc_id'
  end
end
