---
title: CWeaponBaseItem
---

```csharp
public interface CWeaponBaseItem : CCSWeaponBase, CBasePlayerWeapon, CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaClass<CCSWeaponBase>, ISchemaClass<CWeaponBaseItem>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Redraw** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CWeaponBaseItem.cs#L18)

```csharp
ref bool Redraw { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SequenceInProgress** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CWeaponBaseItem.cs#L16)

```csharp
ref bool SequenceInProgress { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**RedrawUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CWeaponBaseItem.cs#L21)

```csharp
void RedrawUpdated()
```

**SequenceInProgressUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CWeaponBaseItem.cs#L20)

```csharp
void SequenceInProgressUpdated()
```

