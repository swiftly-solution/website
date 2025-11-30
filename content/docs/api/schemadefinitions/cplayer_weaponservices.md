---
title: CPlayer_WeaponServices
---

# Interface CPlayer_WeaponServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPlayer_WeaponServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_WeaponServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_WeaponServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActiveWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L20)

```csharp
ref CHandle<CBasePlayerWeapon> ActiveWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)>

### Ammo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L24)

```csharp
ISchemaFixedArray<ushort> Ammo { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### LastWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L22)

```csharp
ref CHandle<CBasePlayerWeapon> LastWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)>

### MyValidWeapons

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L80)

```csharp
IEnumerable<CBasePlayerWeapon> MyValidWeapons { get; }
```

#### Property Value

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)>

### MyWeapons

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L18)

```csharp
ref CUtlVector<CHandle<CBasePlayerWeapon>> MyWeapons { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)>>

### PreventWeaponPickup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L26)

```csharp
ref bool PreventWeaponPickup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ActiveWeaponUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L29)

```csharp
void ActiveWeaponUpdated()
```

### AmmoUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L31)

```csharp
void AmmoUpdated()
```

### DropWeapon(CBasePlayerWeapon)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L12)

Drop a weapon.

```csharp
void DropWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon) - The weapon to drop.

### DropWeaponByClass()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L66)

Drop all weapons with the specified class.

```csharp
void DropWeaponByClass<T>() where T : class, ISchemaClass<T>
```

#### Type Parameters

- **T**:  - The weapon class.

### DropWeaponByDesignerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L48)

Drop a weapon by designer name.

```csharp
void DropWeaponByDesignerName(string designerName)
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the weapon to drop.

### DropWeaponBySlot(gear_slot_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L30)

Drop a weapon by slot.

```csharp
void DropWeaponBySlot(gear_slot_t slot)
```

#### Parameters

- **slot**: [gear_slot_t](/docs/api/schemadefinitions/gear_slot_t) - The slot to drop the weapon from.

### LastWeaponUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L30)

```csharp
void LastWeaponUpdated()
```

### MyWeaponsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L28)

```csharp
void MyWeaponsUpdated()
```

### RemoveWeapon(CBasePlayerWeapon)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L18)

Drop and remove a weapon.

```csharp
void RemoveWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon) - The weapon to remove.

### RemoveWeaponByClass()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L72)

Drop and remove all weapons with the specified class.

```csharp
void RemoveWeaponByClass<T>() where T : class, ISchemaClass<T>
```

#### Type Parameters

- **T**:  - The weapon class.

### RemoveWeaponByDesignerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L54)

Remove a weapon by designer name.

```csharp
void RemoveWeaponByDesignerName(string designerName)
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the weapon to remove.

### RemoveWeaponBySlot(gear_slot_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L36)

Remove a weapon by slot.

```csharp
void RemoveWeaponBySlot(gear_slot_t slot)
```

#### Parameters

- **slot**: [gear_slot_t](/docs/api/schemadefinitions/gear_slot_t) - The slot to remove the weapon from.

### SelectWeapon(CBasePlayerWeapon)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L24)

Make player select a weapon.

```csharp
void SelectWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon) - The weapon to select.

### SelectWeaponByClass()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L78)

Select a weapon by class.

```csharp
void SelectWeaponByClass<T>() where T : class, ISchemaClass<T>
```

#### Type Parameters

- **T**:  - The weapon class.

### SelectWeaponByDesignerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L60)

Select a weapon by designer name.

```csharp
void SelectWeaponByDesignerName(string designerName)
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the weapon to select.

### SelectWeaponBySlot(gear_slot_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L42)

Select a weapon by slot.

```csharp
void SelectWeaponBySlot(gear_slot_t slot)
```

#### Parameters

- **slot**: [gear_slot_t](/docs/api/schemadefinitions/gear_slot_t) - The slot to select the weapon from.

