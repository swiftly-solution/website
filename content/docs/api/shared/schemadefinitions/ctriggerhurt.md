---
title: CTriggerHurt
---

```csharp
public interface CTriggerHurt : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerHurt>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BitsDamageInflict** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L26)

```csharp
ref DamageTypes_t BitsDamageInflict { get; }
```

#### Property Value

- [DamageTypes_t](/docs/api/shared/schemadefinitions/damagetypes_t)

**Damage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L18)

```csharp
ref float Damage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DamageCap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L20)

```csharp
ref float DamageCap { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DamageForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L32)

```csharp
ref Vector DamageForce { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**DamageModel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L28)

```csharp
ref int DamageModel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ForgivenessDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L24)

```csharp
ref float ForgivenessDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**HurtEntities** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L42)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> HurtEntities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

**HurtThinkPeriod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L36)

```csharp
ref float HurtThinkPeriod { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastDmgTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L22)

```csharp
GameTime_t LastDmgTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**NoDmgForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L30)

```csharp
ref bool NoDmgForce { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OnHurt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L38)

```csharp
CEntityIOOutput OnHurt { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnHurtPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L40)

```csharp
CEntityIOOutput OnHurtPlayer { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OriginalDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L16)

```csharp
ref float OriginalDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ThinkAlways** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerHurt.cs#L34)

```csharp
ref bool ThinkAlways { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

