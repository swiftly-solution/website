---
title: CFuseProgram
---

```csharp
public interface CFuseProgram : ISchemaClass<CFuseProgram>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**MaxTempVarsUsed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L24)

```csharp
ref int MaxTempVarsUsed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ProgramBuffer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L16)

```csharp
ref CUtlVector<byte> ProgramBuffer { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

**VariablesRead** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L19)

```csharp
ref CUtlVector VariablesRead { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**VariablesWritten** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseProgram.cs#L22)

```csharp
ref CUtlVector VariablesWritten { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

