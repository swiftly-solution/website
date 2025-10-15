---
title: CFuseProgram
---

```csharp
public interface CFuseProgram : ISchemaClass<CFuseProgram>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### MaxTempVarsUsed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L23)

```csharp
ref int MaxTempVarsUsed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ProgramBuffer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L17)

```csharp
ref CUtlVector<byte> ProgramBuffer { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### VariablesRead

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L19)

```csharp
ref CUtlVector<FuseVariableIndex_t> VariablesRead { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FuseVariableIndex_t](/docs/api/shared/schemadefinitions/fusevariableindex_t)>

### VariablesWritten

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L21)

```csharp
ref CUtlVector<FuseVariableIndex_t> VariablesWritten { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FuseVariableIndex_t](/docs/api/shared/schemadefinitions/fusevariableindex_t)>

