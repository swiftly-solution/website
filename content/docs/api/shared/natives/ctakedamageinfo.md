---
title: CTakeDamageInfo
---

```csharp
public struct CTakeDamageInfo
```

#### Inherited Members

## Constructors

### CTakeDamageInfo()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L65)

```csharp
public CTakeDamageInfo()
```

### CTakeDamageInfo(CBaseEntity, CBaseEntity, CBaseEntity, float, DamageTypes_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L75)

```csharp
public CTakeDamageInfo(CBaseEntity inflictor, CBaseEntity attacker, CBaseEntity ability, float flDamage, DamageTypes_t bitsDamageType)
```

#### Parameters

- **inflictor**: [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)
- **attacker**: [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)
- **ability**: [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)
- **flDamage**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **bitsDamageType**: [DamageTypes_t](/docs/api/shared/schemadefinitions/damagetypes_t)

## Fields

### Ability

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L31)

```csharp
public CHandle<CEntityInstance> Ability
```

#### Field Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### AmmoType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L36)

```csharp
public sbyte AmmoType
```

#### Field Value

- [sbyte](https://learn.microsoft.com/dotnet/api/system.sbyte)

### Attacker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L30)

```csharp
public CHandle<CEntityInstance> Attacker
```

#### Field Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### AttackerInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L59)

```csharp
public AttackerInfo_t AttackerInfo
```

#### Field Value

- [AttackerInfo_t](/docs/api/shared/natives/attackerinfo_t)

### Damage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L32)

```csharp
public float Damage
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamageCustom

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L35)

```csharp
public uint DamageCustom
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DamageDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L28)

```csharp
public Vector DamageDirection
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### DamageFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L47)

```csharp
public TakeDamageFlags_t DamageFlags
```

#### Field Value

- [TakeDamageFlags_t](/docs/api/shared/schemadefinitions/takedamageflags_t)

### DamageForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L25)

```csharp
public Vector DamageForce
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### DamagePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L26)

```csharp
public Vector DamagePosition
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### DamageSourceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L48)

```csharp
public CString DamageSourceName
```

#### Field Value

- [CString](/docs/api/shared/natives/cstring)

### DamageType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L34)

```csharp
public DamageTypes_t DamageType
```

#### Field Value

- [DamageTypes_t](/docs/api/shared/schemadefinitions/damagetypes_t)

### FriendlyFireDamageReductionRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L54)

```csharp
public float FriendlyFireDamageReductionRatio
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HitGroupId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L52)

```csharp
[Obsolete("This field somehow holds garbage value in game. Use ActualHitGroup instead.")]
public HitGroup_t HitGroupId
```

#### Field Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### InTakeDamageFlow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L61)

```csharp
public bool InTakeDamageFlow
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Inflictor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L29)

```csharp
public CHandle<CEntityInstance> Inflictor
```

#### Field Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### NumObjectsPenetrated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L53)

```csharp
public int NumObjectsPenetrated
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OriginalDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L40)

```csharp
public float OriginalDamage
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ReportedPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L27)

```csharp
public Vector ReportedPosition
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### ScriptInstance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L58)

```csharp
public void* ScriptInstance
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

### ShouldBleed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L41)

```csharp
public bool ShouldBleed
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldSpark

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L42)

```csharp
public bool ShouldSpark
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TotalledDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L33)

```csharp
public float TotalledDamage
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Trace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L46)

```csharp
public CGameTrace* Trace
```

#### Field Value

- [CGameTrace](/docs/api/shared/natives/cgametrace)*

### _pVTable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L23)

```csharp
public nint _pVTable
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Properties

### ActualHitGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L85)

```csharp
public HitGroup_t ActualHitGroup { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

