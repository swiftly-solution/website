---
title: IPermissionManager
---

```csharp
public interface IPermissionManager
```

## Methods

### AddPermission(ulong, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L29)

```csharp
void AddPermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to add.

### AddSubPermission(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L43)

```csharp
void AddSubPermission(string permission, string subPermission)
```

#### Parameters

- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to add the sub-permission to.
- **subPermission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The sub-permission to add.

### ClearPermission(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L56)

```csharp
void ClearPermission(ulong steamId)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.

### PlayerHasPermission(ulong, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L13)

```csharp
bool PlayerHasPermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player has the permission, false otherwise.

### PlayerHasPermissions(ulong, IEnumerable)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L22)

```csharp
bool PlayerHasPermissions(ulong steamId, IEnumerable<string> permissions)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permissions**: [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The list of permissions to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player has all the permissions, false otherwise.

### RemovePermission(ulong, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L36)

```csharp
void RemovePermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to remove.

### RemoveSubPermission(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L50)

```csharp
void RemoveSubPermission(string permission, string subPermission)
```

#### Parameters

- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to remove the sub-permission from.
- **subPermission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The sub-permission to remove.

