---
title: CSeqCmdSeqDesc
---

```csharp
public interface CSeqCmdSeqDesc : ISchemaClass<CSeqCmdSeqDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActivityArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L38)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimActivity](/docs/api/shared/schemadefinitions/canimactivity)>

### CmdLayerArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L34)

```csharp
ref CUtlVector<CSeqCmdLayer> CmdLayerArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqCmdLayer](/docs/api/shared/schemadefinitions/cseqcmdlayer)>

### EventArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L36)

```csharp
ref CUtlVector<CAnimEventDefinition> EventArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimEventDefinition](/docs/api/shared/schemadefinitions/canimeventdefinition)>

### FPS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L28)

```csharp
ref float FPS { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L20)

```csharp
CSeqSeqDescFlag Flags { get; }
```

#### Property Value

- [CSeqSeqDescFlag](/docs/api/shared/schemadefinitions/cseqseqdescflag)

### FrameCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L26)

```csharp
ref short FrameCount { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### FrameRangeSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L24)

```csharp
ref short FrameRangeSequence { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### NumLocalResults

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L32)

```csharp
ref short NumLocalResults { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### PoseSettingArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L40)

```csharp
ref CUtlVector<CSeqPoseSetting> PoseSettingArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqPoseSetting](/docs/api/shared/schemadefinitions/cseqposesetting)>

### SubCycles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L30)

```csharp
ref short SubCycles { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Transition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L22)

```csharp
CSeqTransition Transition { get; }
```

#### Property Value

- [CSeqTransition](/docs/api/shared/schemadefinitions/cseqtransition)

