using HostelManagementSystem.Domain.Entities;

namespace HostelManagementSystem.Application.Interfaces
{
    public interface IRoomService
    {
        Task<IEnumerable<Room>> GetAllAsync();
    }
}