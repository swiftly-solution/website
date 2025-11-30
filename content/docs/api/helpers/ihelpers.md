---
title: IHelpers
---

# Interface IHelpers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L88)

**Namespace**: [SwiftlyS2.Shared.Helpers](/docs/api/helpers)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IHelpers
```

## Methods

### GetClassnameByDefinitionIndex(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L117)

Get weapon classname from item definition index.

```csharp
string? GetClassnameByDefinitionIndex(int itemDefinitionIndex)
```

#### Parameters

- **itemDefinitionIndex**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The item definition index of the weapon.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)? - The weapon classname (e.g., "weapon_awp") or null if not found.

### GetClassnameByDefinitionIndex(ItemDefinitionIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L124)

Get weapon classname from item definition index.

```csharp
string? GetClassnameByDefinitionIndex(ItemDefinitionIndex itemDefinitionIndex)
```

#### Parameters

- **itemDefinitionIndex**: [ItemDefinitionIndex](/docs/api/helpers/itemdefinitionindex) - The item definition index of the weapon.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)? - The weapon classname (e.g., "weapon_awp") or null if not found.

### GetDefinitionIndexByClassname(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L131)

Get item definition index from weapon classname.

```csharp
int? GetDefinitionIndexByClassname(string classname)
```

#### Parameters

- **classname**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The weapon classname (e.g., "weapon_awp").

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)? - The item definition index or null if not found.

### GetWeaponCSDataFromKey(int, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L96)

Get weapon vdata from key.

```csharp
CCSWeaponBaseVData? GetWeaponCSDataFromKey(int unknown, string key)
```

#### Parameters

- **unknown**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Not sure what this argument is for, but in general it's -1.
- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the weapon (usually item idx).

#### Returns

- [CCSWeaponBaseVData](/docs/api/schemadefinitions/ccsweaponbasevdata)? - The weapon vdata.

### GetWeaponCSDataFromKey(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L103)

Get weapon vdata from item definition index.

```csharp
CCSWeaponBaseVData? GetWeaponCSDataFromKey(int itemDefinitionIndex)
```

#### Parameters

- **itemDefinitionIndex**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The item definition index of the weapon.

#### Returns

- [CCSWeaponBaseVData](/docs/api/schemadefinitions/ccsweaponbasevdata)? - The weapon vdata.

### GetWeaponCSDataFromKey(ItemDefinitionIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L110)

Get weapon vdata from item definition index.

```csharp
CCSWeaponBaseVData? GetWeaponCSDataFromKey(ItemDefinitionIndex itemDefinitionIndex)
```

#### Parameters

- **itemDefinitionIndex**: [ItemDefinitionIndex](/docs/api/helpers/itemdefinitionindex) - The item definition index of the weapon.

#### Returns

- [CCSWeaponBaseVData](/docs/api/schemadefinitions/ccsweaponbasevdata)? - The weapon vdata.

