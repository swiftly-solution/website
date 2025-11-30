---
title: CSeqSynthAnimDesc
---

# Interface CSeqSynthAnimDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSeqSynthAnimDesc : ISchemaClass<CSeqSynthAnimDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSeqSynthAnimDesc>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActivityArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L28)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimActivity](/docs/api/schemadefinitions/canimactivity)>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L20)

```csharp
CSeqSeqDescFlag Flags { get; }
```

#### Property Value

- [CSeqSeqDescFlag](/docs/api/schemadefinitions/cseqseqdescflag)

### LocalBaseReference

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L24)

```csharp
ref short LocalBaseReference { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LocalBoneMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L26)

```csharp
ref short LocalBoneMask { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### Transition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L22)

```csharp
CSeqTransition Transition { get; }
```

#### Property Value

- [CSeqTransition](/docs/api/schemadefinitions/cseqtransition)

