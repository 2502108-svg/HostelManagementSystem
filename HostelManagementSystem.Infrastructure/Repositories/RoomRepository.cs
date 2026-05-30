using HostelManagementSystem.Application.Interfaces;
using HostelManagementSystem.Domain.Entities;

namespace HostelManagementSystem.Infrastructure.Repositories
{
    public class RoomRepository : IRoomRepository
    {
        public async Task<IEnumerable<Room>> GetAllAsync()
        {
            return await Task.FromResult(new List<Room>());
        }
    }
}