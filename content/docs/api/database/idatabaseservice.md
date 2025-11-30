---
title: IDatabaseService
---

# Interface IDatabaseService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Database/IDatabaseService.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Database](/docs/api/database)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IDatabaseService
```

## Methods

### GetConnection(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Database/IDatabaseService.cs#L19)

Get a connection to the database.

```csharp
IDbConnection GetConnection(string connectionName)
```

#### Parameters

- **connectionName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the connection to get the connection for.

#### Returns

- [IDbConnection](https://learn.microsoft.com/dotnet/api/system.data.idbconnection) - A connection to the database. Return the default connection if the connection name is not found.

### GetConnectionString(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Database/IDatabaseService.cs#L12)

Get the connection string for a given connection name.

```csharp
string GetConnectionString(string connectionName)
```

#### Parameters

- **connectionName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the connection to get the connection string for.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The connection string for the given connection name. Return the default connection string if the connection name is not found.

