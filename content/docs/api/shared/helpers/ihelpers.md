---
title: IHelpers
---

```csharp
public interface IHelpers
```

## Methods

### GetClassnameByDefinitionIndex(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L110)

```csharp
string? GetClassnameByDefinitionIndex(int itemDefinitionIndex)
```

#### Parameters

- **itemDefinitionIndex**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The item definition index of the weapon.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)? - The weapon classname (e.g., "weapon_awp") or null if not found.

### GetDefinitionIndexByClassname(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L117)

```csharp
int? GetDefinitionIndexByClassname(string classname)
```

#### Parameters

- **classname**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The weapon classname (e.g., "weapon_awp").

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)? - The item definition index or null if not found.

### GetWeaponCSDataFromKey(int, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L96)

```csharp
CCSWeaponBaseVData? GetWeaponCSDataFromKey(int unknown, string key)
```

#### Parameters

- **unknown**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Not sure what this argument is for, but in general it's -1.
- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the weapon (usually item idx).

#### Returns

- [CCSWeaponBaseVData](/docs/api/shared/schemadefinitions/ccsweaponbasevdata)? - The weapon vdata.

### GetWeaponCSDataFromKey(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Helpers/IHelpers.cs#L103)

```csharp
CCSWeaponBaseVData? GetWeaponCSDataFromKey(int itemDefinitionIndex)
```

#### Parameters

- **itemDefinitionIndex**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The item definition index of the weapon.

#### Returns

- [CCSWeaponBaseVData](/docs/api/shared/schemadefinitions/ccsweaponbasevdata)? - The weapon vdata.

