---
title: CDestructiblePart
---

# Interface CDestructiblePart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDestructiblePart : ISchemaClass<CDestructiblePart>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CDestructiblePart>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BodyGroupName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L28)

```csharp
ref CGlobalSymbol BodyGroupName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### DamageLevels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L30)

```csharp
ref CUtlVector<CDestructiblePart_DamageLevel> DamageLevels { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CDestructiblePart_DamageLevel](/docs/api/schemadefinitions/cdestructiblepart_damagelevel)>

### DebugName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L18)

```csharp
ref CGlobalSymbol DebugName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### DisableHitGroupWhenDestroyed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L22)

```csharp
ref bool DisableHitGroupWhenDestroyed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HitGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L20)

```csharp
ref HitGroup_t HitGroup { get; }
```

#### Property Value

- [HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)

### OnlyDestroyWhenGibbing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L26)

```csharp
ref bool OnlyDestroyWhenGibbing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OtherHitgroupsToDestroyWhenFullyDestructed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L24)

```csharp
ref CUtlVector<HitGroup_t> OtherHitgroupsToDestroyWhenFullyDestructed { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[HitGroup_t](/docs/api/schemadefinitions/hitgroup_t)>

