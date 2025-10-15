---
title: CSequenceGroupData
---

```csharp
public interface CSequenceGroupData : ISchemaClass<CSequenceGroupData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L19)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### KeyValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L42)

```csharp
SchemaUntypedField KeyValues { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### LocalBoneMaskArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L31)

```csharp
ref CUtlVector<CSeqBoneMaskList> LocalBoneMaskArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqBoneMaskList](/docs/api/shared/schemadefinitions/cseqbonemasklist)>

### LocalBoneNameArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L35)

```csharp
ref CUtlVector<CBufferString> LocalBoneNameArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBufferString](/docs/api/shared/natives/cbufferstring)>

### LocalCmdSeqDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L29)

```csharp
ref CUtlVector<CSeqCmdSeqDesc> LocalCmdSeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqCmdSeqDesc](/docs/api/shared/schemadefinitions/cseqcmdseqdesc)>

### LocalIKAutoplayLockArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L44)

```csharp
ref CUtlVector<CSeqIKLock> LocalIKAutoplayLockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqIKLock](/docs/api/shared/schemadefinitions/cseqiklock)>

### LocalMultiSeqDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L25)

```csharp
ref CUtlVector<CSeqS1SeqDesc> LocalMultiSeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqS1SeqDesc](/docs/api/shared/schemadefinitions/cseqs1seqdesc)>

### LocalNodeName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L37)

```csharp
ref CBufferString LocalNodeName { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### LocalPoseParamArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L39)

```csharp
ref CUtlVector<CSeqPoseParamDesc> LocalPoseParamArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqPoseParamDesc](/docs/api/shared/schemadefinitions/cseqposeparamdesc)>

### LocalS1SeqDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L23)

```csharp
ref CUtlVector<CSeqS1SeqDesc> LocalS1SeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqS1SeqDesc](/docs/api/shared/schemadefinitions/cseqs1seqdesc)>

### LocalScaleSetArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L33)

```csharp
ref CUtlVector<CSeqScaleSet> LocalScaleSetArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqScaleSet](/docs/api/shared/schemadefinitions/cseqscaleset)>

### LocalSequenceNameArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L21)

```csharp
ref CUtlVector<CBufferString> LocalSequenceNameArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBufferString](/docs/api/shared/natives/cbufferstring)>

### LocalSynthAnimDescArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L27)

```csharp
ref CUtlVector<CSeqSynthAnimDesc> LocalSynthAnimDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqSynthAnimDesc](/docs/api/shared/schemadefinitions/cseqsynthanimdesc)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L17)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

