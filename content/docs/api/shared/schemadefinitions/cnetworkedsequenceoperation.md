---
title: CNetworkedSequenceOperation
---

```csharp
public interface CNetworkedSequenceOperation : ISchemaClass<CNetworkedSequenceOperation>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Cycle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L20)

```csharp
ref float Cycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Discontinuity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L26)

```csharp
ref bool Discontinuity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PrevCycle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L18)

```csharp
ref float PrevCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PrevCycleForAnimEventDetection** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L30)

```csharp
ref float PrevCycleForAnimEventDetection { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PrevCycleFromDiscontinuity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L28)

```csharp
ref float PrevCycleFromDiscontinuity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Sequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L16)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

**SequenceChangeNetworked** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L24)

```csharp
ref bool SequenceChangeNetworked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Weight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L22)

```csharp
ref CNetworkedQuantizedFloat Weight { get; }
```

#### Property Value

- [CNetworkedQuantizedFloat](/docs/api/shared/natives/cnetworkedquantizedfloat)

## Methods

**CycleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L34)

```csharp
void CycleUpdated()
```

**PrevCycleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L33)

```csharp
void PrevCycleUpdated()
```

**SequenceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L32)

```csharp
void SequenceUpdated()
```

**WeightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNetworkedSequenceOperation.cs#L35)

```csharp
void WeightUpdated()
```

