---
title: CSeqS1SeqDesc
---

```csharp
public interface CSeqS1SeqDesc : ISchemaClass<CSeqS1SeqDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActivityArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L36)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimActivity](/docs/api/shared/schemadefinitions/canimactivity)>

### AutoLayerArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L25)

```csharp
ref CUtlVector<CSeqAutoLayer> AutoLayerArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqAutoLayer](/docs/api/shared/schemadefinitions/cseqautolayer)>

### Fetch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L21)

```csharp
CSeqMultiFetch Fetch { get; }
```

#### Property Value

- [CSeqMultiFetch](/docs/api/shared/schemadefinitions/cseqmultifetch)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L19)

```csharp
CSeqSeqDescFlag Flags { get; }
```

#### Property Value

- [CSeqSeqDescFlag](/docs/api/shared/schemadefinitions/cseqseqdescflag)

### FootMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L38)

```csharp
ref CUtlVector<CFootMotion> FootMotion { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFootMotion](/docs/api/shared/schemadefinitions/cfootmotion)>

### IKLockArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L27)

```csharp
ref CUtlVector<CSeqIKLock> IKLockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSeqIKLock](/docs/api/shared/schemadefinitions/cseqiklock)>

### LegacyKeyValueText

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L34)

```csharp
ref CBufferString LegacyKeyValueText { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### LocalWeightlist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L23)

```csharp
ref int LocalWeightlist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L17)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### SequenceKeys

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L32)

```csharp
SchemaUntypedField SequenceKeys { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Transition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L29)

```csharp
CSeqTransition Transition { get; }
```

#### Property Value

- [CSeqTransition](/docs/api/shared/schemadefinitions/cseqtransition)

