---
title: CAnimationGroup
---

# Interface CAnimationGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimationGroup : ISchemaClass<CAnimationGroup>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimationGroup>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AdditionalExtRefs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L32)

```csharp
ref CUtlVector<SchemaUntypedField> AdditionalExtRefs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### DecodeKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L28)

```csharp
CAnimKeyData DecodeKey { get; }
```

#### Property Value

- [CAnimKeyData](/docs/api/schemadefinitions/canimkeydata)

### DirectHSeqGroup_Handle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L26)

```csharp
ref CStrongHandle<InfoForResourceTypeCSequenceGroupData> DirectHSeqGroup_Handle { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCSequenceGroupData](/docs/api/schemadefinitions/infoforresourcetypecsequencegroupdata)>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L18)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IncludedGroupArray_Handle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L24)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCAnimationGroup>> IncludedGroupArray_Handle { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCAnimationGroup](/docs/api/schemadefinitions/infoforresourcetypecanimationgroup)>>

### LocalHAnimArray_Handle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L22)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCAnimData>> LocalHAnimArray_Handle { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCAnimData](/docs/api/schemadefinitions/infoforresourcetypecanimdata)>>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L20)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### Scripts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L30)

```csharp
ref CUtlVector<CBufferString> Scripts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CBufferString](/docs/api/natives/cbufferstring)>

