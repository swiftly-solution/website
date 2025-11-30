---
title: IPermissionManager
---

# Interface IPermissionManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Permissions](/docs/api/permissions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IPermissionManager
```

## Methods

### AddPermission(ulong, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L29)

Adds a permission to a player.

```csharp
void AddPermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to add.

### AddSubPermission(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L43)

Adds a sub-permission to a permission.

```csharp
void AddSubPermission(string permission, string subPermission)
```

#### Parameters

- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to add the sub-permission to.
- **subPermission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The sub-permission to add.

### ClearPermission(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L56)

Clear all permission from a player.

```csharp
void ClearPermission(ulong steamId)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.

### PlayerHasPermission(ulong, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L13)

Checks if a player has a permission.
Support 'xxx.*' for wildcard permissions.

```csharp
bool PlayerHasPermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player has the permission, false otherwise.

### PlayerHasPermissions(ulong, IEnumerable)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L22)

Checks if a player has all permissions in the list.
Support 'xxx.*' for wildcard permissions.

```csharp
bool PlayerHasPermissions(ulong steamId, IEnumerable<string> permissions)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permissions**: [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The list of permissions to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player has all the permissions, false otherwise.

### RemovePermission(ulong, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L36)

Removes a permission from a player.

```csharp
void RemovePermission(ulong steamId, string permission)
```

#### Parameters

- **steamId**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) - The Steam ID of the player.
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to remove.

### RemoveSubPermission(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Permissions/IPermissionManager.cs#L50)

Removes a sub-permission from a permission.

```csharp
void RemoveSubPermission(string permission, string subPermission)
```

#### Parameters

- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The permission to remove the sub-permission from.
- **subPermission**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The sub-permission to remove.

