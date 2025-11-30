---
title: CMovementStatsProperty
---

# Interface CMovementStatsProperty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementStatsProperty.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMovementStatsProperty : ISchemaClass<CMovementStatsProperty>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMovementStatsProperty>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EmaMovementDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementStatsProperty.cs#L20)

```csharp
CVectorExponentialMovingAverage EmaMovementDirection { get; }
```

#### Property Value

- [CVectorExponentialMovingAverage](/docs/api/schemadefinitions/cvectorexponentialmovingaverage)

### UseCounter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementStatsProperty.cs#L18)

```csharp
ref int UseCounter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

