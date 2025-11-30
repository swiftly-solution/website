---
title: CBtActionMoveTo
---

# Interface CBtActionMoveTo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBtActionMoveTo : CBtNode, ISchemaClass<CBtNode>, ISchemaClass<CBtActionMoveTo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBtNode](/docs/api/schemadefinitions/cbtnode)
- [ISchemaClass<CBtNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBtActionMoveTo>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AdditionalArrivalEpsilon2D

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L40)

```csharp
ref float AdditionalArrivalEpsilon2D { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ArrivalEpsilon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L38)

```csharp
ref float ArrivalEpsilon { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AutoLookAdjust

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L26)

```csharp
ref bool AutoLookAdjust { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckApproximateCornersTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L32)

```csharp
CountdownTimer CheckApproximateCornersTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### CheckHighPriorityItem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L34)

```csharp
CountdownTimer CheckHighPriorityItem { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### ComputePath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L28)

```csharp
ref bool ComputePath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DamagingAreasPenaltyCost

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L30)

```csharp
ref float DamagingAreasPenaltyCost { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Destination

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L24)

```csharp
ref Vector Destination { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### DestinationInputKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L18)

```csharp
string DestinationInputKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HidingSpotCheckDistanceThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L42)

```csharp
ref float HidingSpotCheckDistanceThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HidingSpotInputKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L20)

```csharp
string HidingSpotInputKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NearestAreaDistanceThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L44)

```csharp
ref float NearestAreaDistanceThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RepathTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L36)

```csharp
CountdownTimer RepathTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### ThreatInputKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBtActionMoveTo.cs#L22)

```csharp
string ThreatInputKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

