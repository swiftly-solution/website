---
title: IPermissionManager
---

```csharp
public interface IPermissionManager
```

## Methods

### AddPermission(ulong, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L19)

```csharp
void AddPermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to add.

### AddSubPermission(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L33)

```csharp
void AddSubPermission(string permission, string subPermission)
```

#### Parameters

- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to add the sub-permission to.
- **subPermission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The sub-permission to add.

### ClearPermission(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L46)

```csharp
void ClearPermission(ulong steamId)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.

### PlayerHasPermission(ulong, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L12)

```csharp
bool PlayerHasPermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player has the permission, false otherwise.

### RemovePermission(ulong, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L26)

```csharp
void RemovePermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to remove.

### RemoveSubPermission(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L40)

```csharp
void RemoveSubPermission(string permission, string subPermission)
```

#### Parameters

- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to remove the sub-permission from.
- **subPermission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The sub-permission to remove.

