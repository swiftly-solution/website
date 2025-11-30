---
title: CNetworkedSequenceOperation
---

# Interface CNetworkedSequenceOperation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNetworkedSequenceOperation : ISchemaClass<CNetworkedSequenceOperation>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CNetworkedSequenceOperation>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Cycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L22)

```csharp
ref float Cycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Discontinuity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L28)

```csharp
ref bool Discontinuity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PrevCycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L20)

```csharp
ref float PrevCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PrevCycleForAnimEventDetection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L32)

```csharp
ref float PrevCycleForAnimEventDetection { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PrevCycleFromDiscontinuity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L30)

```csharp
ref float PrevCycleFromDiscontinuity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L18)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/schemadefinitions/hsequence)

### SequenceChangeNetworked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L26)

```csharp
ref bool SequenceChangeNetworked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L24)

```csharp
ref CNetworkedQuantizedFloat Weight { get; }
```

#### Property Value

- [CNetworkedQuantizedFloat](/docs/api/natives/cnetworkedquantizedfloat)

## Methods

### CycleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L36)

```csharp
void CycleUpdated()
```

### PrevCycleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L35)

```csharp
void PrevCycleUpdated()
```

### SequenceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L34)

```csharp
void SequenceUpdated()
```

### WeightUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L37)

```csharp
void WeightUpdated()
```

