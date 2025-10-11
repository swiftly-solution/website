---
title: CPlayer_WeaponServices
---

```csharp
public interface CPlayer_WeaponServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_WeaponServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ActiveWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L18)

```csharp
ref CHandle<CBasePlayerWeapon> ActiveWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>

### **Ammo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L22)

```csharp
ISchemaFixedArray<ushort> Ammo { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### **LastWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L20)

```csharp
ref CHandle<CBasePlayerWeapon> LastWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>

### **MyWeapons** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L16)

```csharp
ref CUtlVector<CHandle<CBasePlayerWeapon>> MyWeapons { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>>

### **PreventWeaponPickup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L24)

```csharp
ref bool PreventWeaponPickup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **ActiveWeaponUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L27)

```csharp
void ActiveWeaponUpdated()
```

### **AmmoUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L29)

```csharp
void AmmoUpdated()
```

### **DropWeapon(CBasePlayerWeapon)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L9)

```csharp
void DropWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon) - The weapon to drop.

### **DropWeaponByClass<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L27)

```csharp
void DropWeaponByClass<T>() where T : CBasePlayerWeapon
```

#### Type Parameters

- **T**:  - The weapon class.

### **LastWeaponUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L28)

```csharp
void LastWeaponUpdated()
```

### **MyWeaponsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_WeaponServices.cs#L26)

```csharp
void MyWeaponsUpdated()
```

### **RemoveWeapon(CBasePlayerWeapon)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L15)

```csharp
void RemoveWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon) - The weapon to remove.

### **RemoveWeaponByClass<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L33)

```csharp
void RemoveWeaponByClass<T>() where T : CBasePlayerWeapon
```

#### Type Parameters

- **T**:  - The weapon class.

### **SelectWeapon(CBasePlayerWeapon)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L21)

```csharp
void SelectWeapon(CBasePlayerWeapon weapon)
```

#### Parameters

- **weapon**: [CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon) - The weapon to select.

### **SelectWeaponByClass<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_WeaponServices.cs#L39)

```csharp
void SelectWeaponByClass<T>() where T : CBasePlayerWeapon
```

#### Type Parameters

- **T**:  - The weapon class.

