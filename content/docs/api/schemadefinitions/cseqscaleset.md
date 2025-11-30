---
title: CSeqScaleSet
---

# Interface CSeqScaleSet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSeqScaleSet : ISchemaClass<CSeqScaleSet>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSeqScaleSet>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneScaleArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L26)

```csharp
ref CUtlVector<float> BoneScaleArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalBoneArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L24)

```csharp
ref CUtlVector<short> LocalBoneArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### RootOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L20)

```csharp
ref bool RootOffset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RootOffset1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L22)

```csharp
ref Vector RootOffset1 { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

