using HostelManagementSystem.Domain.Entities;

namespace HostelManagementSystem.Application.Interfaces
{
    public interface IRoomRepository
    {
        Task<IEnumerable<Room>> GetAllAsync();
    }
}