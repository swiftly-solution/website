---
title: CSequenceGroupData
---

```csharp
public interface CSequenceGroupData : ISchemaClass<CSequenceGroupData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L20)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### KeyValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L43)

```csharp
SchemaUntypedField KeyValues { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### LocalBoneMaskArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L32)

```csharp
ref CUtlVector<CSeqBoneMaskList> LocalBoneMaskArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqBoneMaskList](/docs/api/shared/schemadefinitions/cseqbonemasklist)>

### LocalBoneNameArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L36)

```csharp
ref CUtlVector<CBufferString> LocalBoneNameArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBufferString](/docs/api/shared/natives/cbufferstring)>

### LocalCmdSeqDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L30)

```csharp
ref CUtlVector<CSeqCmdSeqDesc> LocalCmdSeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqCmdSeqDesc](/docs/api/shared/schemadefinitions/cseqcmdseqdesc)>

### LocalIKAutoplayLockArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L45)

```csharp
ref CUtlVector<CSeqIKLock> LocalIKAutoplayLockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqIKLock](/docs/api/shared/schemadefinitions/cseqiklock)>

### LocalMultiSeqDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L26)

```csharp
ref CUtlVector<CSeqS1SeqDesc> LocalMultiSeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqS1SeqDesc](/docs/api/shared/schemadefinitions/cseqs1seqdesc)>

### LocalNodeName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L38)

```csharp
ref CBufferString LocalNodeName { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### LocalPoseParamArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L40)

```csharp
ref CUtlVector<CSeqPoseParamDesc> LocalPoseParamArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqPoseParamDesc](/docs/api/shared/schemadefinitions/cseqposeparamdesc)>

### LocalS1SeqDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L24)

```csharp
ref CUtlVector<CSeqS1SeqDesc> LocalS1SeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqS1SeqDesc](/docs/api/shared/schemadefinitions/cseqs1seqdesc)>

### LocalScaleSetArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L34)

```csharp
ref CUtlVector<CSeqScaleSet> LocalScaleSetArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqScaleSet](/docs/api/shared/schemadefinitions/cseqscaleset)>

### LocalSequenceNameArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L22)

```csharp
ref CUtlVector<CBufferString> LocalSequenceNameArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBufferString](/docs/api/shared/natives/cbufferstring)>

### LocalSynthAnimDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L28)

```csharp
ref CUtlVector<CSeqSynthAnimDesc> LocalSynthAnimDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqSynthAnimDesc](/docs/api/shared/schemadefinitions/cseqsynthanimdesc)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

