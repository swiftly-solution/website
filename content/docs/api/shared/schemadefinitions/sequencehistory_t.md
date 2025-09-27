---
title: SequenceHistory_t
---

```csharp
public interface SequenceHistory_t : ISchemaClass<SequenceHistory_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CyclesPerSecond** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SequenceHistory_t.cs#L26)

```csharp
ref float CyclesPerSecond { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PlaybackRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SequenceHistory_t.cs#L24)

```csharp
ref float PlaybackRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SeqFixedCycle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SequenceHistory_t.cs#L20)

```csharp
ref float SeqFixedCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SeqLoopMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SequenceHistory_t.cs#L22)

```csharp
ref AnimLoopMode_t SeqLoopMode { get; }
```

#### Property Value

- [AnimLoopMode_t](/docs/api/shared/schemadefinitions/animloopmode_t)

**SeqStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SequenceHistory_t.cs#L18)

```csharp
GameTime_t SeqStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**Sequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SequenceHistory_t.cs#L16)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

