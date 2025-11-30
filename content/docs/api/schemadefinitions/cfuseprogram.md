---
title: CFuseProgram
---

# Interface CFuseProgram

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFuseProgram : ISchemaClass<CFuseProgram>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CFuseProgram>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MaxTempVarsUsed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L24)

```csharp
ref int MaxTempVarsUsed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ProgramBuffer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L18)

```csharp
ref CUtlVector<byte> ProgramBuffer { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### VariablesRead

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L20)

```csharp
ref CUtlVector<FuseVariableIndex_t> VariablesRead { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FuseVariableIndex_t](/docs/api/schemadefinitions/fusevariableindex_t)>

### VariablesWritten

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L22)

```csharp
ref CUtlVector<FuseVariableIndex_t> VariablesWritten { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FuseVariableIndex_t](/docs/api/schemadefinitions/fusevariableindex_t)>

