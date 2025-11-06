---
title: CPlayer_WeaponServices
---

```csharp
public interface CPlayer_WeaponServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_WeaponServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActiveWeapon

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L19)

```csharp
ref CHandle<CBasePlayerWeapon> ActiveWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>

### Ammo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L23)

```csharp
ISchemaFixedArray<ushort> Ammo { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### LastWeapon

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L21)

```csharp
ref CHandle<CBasePlayerWeapon> LastWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>

### MyWeapons

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L17)

```csharp
ref CUtlVector<CHandle<CBasePlayerWeapon>> MyWeapons { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>>

### PreventWeaponPickup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L25)

```csharp
ref bool PreventWeaponPickup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ActiveWeaponUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L28)

```csharp
void ActiveWeaponUpdated()
```

### AmmoUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L30)

```csharp
void AmmoUpdated()
```

### DropWeapon(CBasePlayerWeapon)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L10)

```csharp
void DropWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon) - The weapon to drop.

### DropWeaponByClass()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L64)

```csharp
void DropWeaponByClass<T>() where T : CBasePlayerWeapon
```

#### Type Parameters

- **T**:  - The weapon class.

### DropWeaponByDesignerName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L46)

```csharp
void DropWeaponByDesignerName(string designerName)
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the weapon to drop.

### DropWeaponBySlot(gear_slot_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L28)

```csharp
void DropWeaponBySlot(gear_slot_t slot)
```

#### Parameters

- **slot**: [gear_slot_t](/docs/api/shared/schemadefinitions/gear_slot_t) - The slot to drop the weapon from.

### LastWeaponUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L29)

```csharp
void LastWeaponUpdated()
```

### MyWeaponsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L27)

```csharp
void MyWeaponsUpdated()
```

### RemoveWeapon(CBasePlayerWeapon)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L16)

```csharp
void RemoveWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon) - The weapon to remove.

### RemoveWeaponByClass()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L70)

```csharp
void RemoveWeaponByClass<T>() where T : CBasePlayerWeapon
```

#### Type Parameters

- **T**:  - The weapon class.

### RemoveWeaponByDesignerName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L52)

```csharp
void RemoveWeaponByDesignerName(string designerName)
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the weapon to remove.

### RemoveWeaponBySlot(gear_slot_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L34)

```csharp
void RemoveWeaponBySlot(gear_slot_t slot)
```

#### Parameters

- **slot**: [gear_slot_t](/docs/api/shared/schemadefinitions/gear_slot_t) - The slot to remove the weapon from.

### SelectWeapon(CBasePlayerWeapon)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L22)

```csharp
void SelectWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon) - The weapon to select.

### SelectWeaponByClass()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L76)

```csharp
void SelectWeaponByClass<T>() where T : CBasePlayerWeapon
```

#### Type Parameters

- **T**:  - The weapon class.

### SelectWeaponByDesignerName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L58)

```csharp
void SelectWeaponByDesignerName(string designerName)
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the weapon to select.

### SelectWeaponBySlot(gear_slot_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L40)

```csharp
void SelectWeaponBySlot(gear_slot_t slot)
```

#### Parameters

- **slot**: [gear_slot_t](/docs/api/shared/schemadefinitions/gear_slot_t) - The slot to select the weapon from.

