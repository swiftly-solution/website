---
title: CTakeDamageInfo
---

# Struct CTakeDamageInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L20)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CTakeDamageInfo
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CTakeDamageInfo()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L65)

```csharp
public CTakeDamageInfo()
```

### CTakeDamageInfo(CBaseEntity, CBaseEntity, CBaseEntity, float, DamageTypes_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L75)

```csharp
public CTakeDamageInfo(CBaseEntity inflictor, CBaseEntity attacker, CBaseEntity ability, float flDamage, DamageTypes_t bitsDamageType)
```

#### Parameters

- **inflictor**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- **attacker**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- **ability**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- **flDamage**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **bitsDamageType**: [DamageTypes_t](/docs/api/schemadefinitions/damagetypes_t)

## Fields

### Ability

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L31)

```csharp
public CHandle<CEntityInstance> Ability
```

#### Field Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

### AmmoType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L36)

```csharp
public sbyte AmmoType
```

#### Field Value

- [sbyte](https://learn.microsoft.com/dotnet/api/system.sbyte)

### Attacker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L30)

```csharp
public CHandle<CEntityInstance> Attacker
```

#### Field Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

### AttackerInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L59)

```csharp
public AttackerInfo_t AttackerInfo
```

#### Field Value

- [AttackerInfo_t](/docs/api/natives/attackerinfo_t)

### Damage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L32)

```csharp
public float Damage
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamageCustom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L35)

```csharp
public uint DamageCustom
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DamageDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L28)

```csharp
public Vector DamageDirection
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### DamageFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L47)

```csharp
public TakeDamageFlags_t DamageFlags
```

#### Field Value

- [TakeDamageFlags_t](/docs/api/schemadefinitions/takedamageflags_t)

### DamageForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L25)

```csharp
public Vector DamageForce
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### DamagePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L26)

```csharp
public Vector DamagePosition
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### DamageSourceName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L48)

```csharp
public CString DamageSourceName
```

#### Field Value

- [CString](/docs/api/natives/cstring)

### DamageType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L34)

```csharp
public DamageTypes_t DamageType
```

#### Field Value

- [DamageTypes_t](/docs/api/schemadefinitions/damagetypes_t)

### FriendlyFireDamageReductionRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L54)

```csharp
public float FriendlyFireDamageReductionRatio
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HitGroupId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L52)

```csharp
[Obsolete("This field somehow holds garbage value in game. Use ActualHitGroup instead.")]
public HitGroup_t HitGroupId
```

#### Field Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### InTakeDamageFlow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L61)

```csharp
public bool InTakeDamageFlow
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Inflictor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L29)

```csharp
public CHandle<CEntityInstance> Inflictor
```

#### Field Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

### NumObjectsPenetrated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L53)

```csharp
public int NumObjectsPenetrated
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OriginalDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L40)

```csharp
public float OriginalDamage
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ReportedPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L27)

```csharp
public Vector ReportedPosition
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### ScriptInstance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L58)

```csharp
public void* ScriptInstance
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

### ShouldBleed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L41)

```csharp
public bool ShouldBleed
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldSpark

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L42)

```csharp
public bool ShouldSpark
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TotalledDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L33)

```csharp
public float TotalledDamage
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Trace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L46)

```csharp
public CGameTrace* Trace
```

#### Field Value

- [CGameTrace](/docs/api/natives/cgametrace)*

### _pVTable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L23)

```csharp
public nint _pVTable
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Properties

### ActualHitGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CTakeDamageInfo.cs#L85)

```csharp
public HitGroup_t ActualHitGroup { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

