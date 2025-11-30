---
title: CAnimDataChannelDesc
---

# Interface CAnimDataChannelDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimDataChannelDesc : ISchemaClass<CAnimDataChannelDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimDataChannelDesc>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChannelClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L18)

```csharp
ref CBufferString ChannelClass { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### Description

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L28)

```csharp
ref CBufferString Description { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### ElementIndexArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L32)

```csharp
ref CUtlVector<int> ElementIndexArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ElementMaskArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L34)

```csharp
ref CUtlVector<uint> ElementMaskArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ElementNameArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L30)

```csharp
ref CUtlVector<CBufferString> ElementNameArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CBufferString](/docs/api/natives/cbufferstring)>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L22)

```csharp
ref int Flags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Grouping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L26)

```csharp
ref CBufferString Grouping { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L24)

```csharp
ref int Type { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VariableName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDataChannelDesc.cs#L20)

```csharp
ref CBufferString VariableName { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

