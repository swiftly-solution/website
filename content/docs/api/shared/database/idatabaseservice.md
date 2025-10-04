---
title: IDatabaseService
---

```csharp
public interface IDatabaseService
```

## Methods

**GetConnection(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Database/IDatabaseService.cs#L19)

```csharp
IDbConnection GetConnection(string connectionName)
```

#### Parameters

- **connectionName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the connection to get the connection for.

#### Returns

- [IDbConnection](https://learn.microsoft.com/dotnet/api/system.data.idbconnection) - A connection to the database. Return the default connection if the connection name is not found.

**GetConnectionString(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Database/IDatabaseService.cs#L12)

```csharp
string GetConnectionString(string connectionName)
```

#### Parameters

- **connectionName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the connection to get the connection string for.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The connection string for the given connection name. Return the default connection string if the connection name is not found.

