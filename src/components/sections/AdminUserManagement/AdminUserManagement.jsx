import React, { useState } from 'react';

const AdminUserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Sample user data
  const users = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      role: 'Admin', 
      status: 'Active', 
      lastLogin: '2025-04-15 09:23:12',
      joinDate: '2024-08-15',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      role: 'Manager', 
      status: 'Active', 
      lastLogin: '2025-04-14 15:42:18',
      joinDate: '2024-09-21',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 3, 
      name: 'Robert Johnson', 
      email: 'robert.johnson@example.com', 
      role: 'Editor', 
      status: 'Inactive', 
      lastLogin: '2025-03-30 08:12:45',
      joinDate: '2024-11-05',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 4, 
      name: 'Emily Wilson', 
      email: 'emily.wilson@example.com', 
      role: 'Customer', 
      status: 'Active', 
      lastLogin: '2025-04-15 12:05:30',
      joinDate: '2025-01-18',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 5, 
      name: 'Michael Brown', 
      email: 'michael.brown@example.com', 
      role: 'Customer', 
      status: 'Pending', 
      lastLogin: null,
      joinDate: '2025-04-12',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 6, 
      name: 'Lisa Davis', 
      email: 'lisa.davis@example.com', 
      role: 'Manager', 
      status: 'Active', 
      lastLogin: '2025-04-13 16:27:41',
      joinDate: '2024-12-03',
      avatar: '/api/placeholder/40/40'
    }
  ];
  
  // Filter users based on search and role
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });
  
  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.joinDate) - new Date(a.joinDate);
      case 'oldest':
        return new Date(a.joinDate) - new Date(b.joinDate);
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  // Extract unique roles for filter
  const roles = ['all', ...new Set(users.map(user => user.role))];
  
  return (
    <div className="admin-section admin-user-management">
      <div className="admin-section-header">
        <h2 className="admin-section-title">User Management</h2>
        <button 
          className="admin-button admin-button-primary" 
          onClick={() => setShowAddModal(true)}
        >
          <i className="fas fa-user-plus"></i> Add User
        </button>
      </div>
      
      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-search-container">
            <i className="fas fa-search admin-search-icon"></i>
            <input 
              type="text" 
              className="admin-search-input" 
              placeholder="Search users by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="admin-filter-controls">
            <div className="admin-filter-group">
              <label>Role:</label>
              <select 
                className="admin-filter-select"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role === 'all' ? 'All Roles' : role}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="admin-filter-group">
              <label>Sort By:</label>
              <select 
                className="admin-filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="admin-card-body">
          <div className="admin-table-responsive">
            <table className="admin-data-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className="admin-user-cell">
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="admin-user-avatar" 
                        />
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`admin-badge ${
                        user.role === 'Admin' ? 'admin-badge-info' : 
                        user.role === 'Manager' ? 'admin-badge-warning' : 
                        'admin-badge-success'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-badge ${
                        user.status === 'Active' ? 'admin-badge-success' : 
                        user.status === 'Inactive' ? 'admin-badge-danger' : 
                        'admin-badge-warning'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.lastLogin || 'Never'}</td>
                    <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                    <td>
                      <div className="admin-table-actions">
                        <button className="admin-action-button admin-view">
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="admin-action-button admin-edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="admin-action-button admin-delete">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {sortedUsers.length === 0 && (
            <div className="admin-empty-state">
              <i className="fas fa-users admin-empty-icon"></i>
              <p>No users found matching your filters.</p>
              <button 
                className="admin-button admin-button-secondary"
                onClick={() => {
                  setSearchTerm('');
                  setFilterRole('all');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
        
        <div className="admin-card-footer">
          <div className="admin-pagination">
            <button className="admin-pagination-button" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="admin-pagination-pages">
              <button className="admin-pagination-page admin-pagination-active">1</button>
            </div>
            <button className="admin-pagination-button" disabled>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="admin-pagination-info">
            Showing {sortedUsers.length} of {users.length} users
          </div>
        </div>
      </div>
      
      {showAddModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Add New User</h3>
              <button 
                className="admin-modal-close" 
                onClick={() => setShowAddModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="admin-modal-body">
              <form className="admin-form">
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">First Name</label>
                    <input 
                      type="text" 
                      className="admin-form-input" 
                      placeholder="Enter first name"
                    />
                  </div>
                  
                  <div className="admin-form-group">
                    <label className="admin-form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="admin-form-input" 
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                
                <div className="admin-form-group">
                  <label className="admin-form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="admin-form-input" 
                    placeholder="Enter email address"
                  />
                </div>
                
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Password</label>
                    <input 
                      type="password" 
                      className="admin-form-input" 
                      placeholder="Enter password"
                    />
                  </div>
                  
                  <div className="admin-form-group">
                    <label className="admin-form-label">Confirm Password</label>
                    <input 
                      type="password" 
                      className="admin-form-input" 
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
                
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Role</label>
                    <select className="admin-form-select">
                      <option value="">Select Role</option>
                      {roles.filter(role => role !== 'all').map(role => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="admin-form-group">
                    <label className="admin-form-label">Status</label>
                    <select className="admin-form-select">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
                
                <div className="admin-form-group">
                  <label className="admin-form-label">Profile Image</label>
                  <div className="admin-file-upload">
                    <input type="file" id="admin-user-image" />
                    <label htmlFor="admin-user-image" className="admin-file-upload-label">
                      <i className="fas fa-cloud-upload-alt"></i>
                      <span>Choose file or drag & drop</span>
                    </label>
                  </div>
                </div>
                
                <div className="admin-form-group">
                  <div className="admin-checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      id="admin-send-welcome" 
                      className="admin-checkbox" 
                    />
                    <label htmlFor="admin-send-welcome" className="admin-checkbox-label">
                      Send welcome email with login details
                    </label>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="admin-modal-footer">
              <button 
                className="admin-button admin-button-secondary" 
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button className="admin-button admin-button-primary">
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserManagement;