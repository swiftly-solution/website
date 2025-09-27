---
title: CMotionGraph
---

```csharp
public interface CMotionGraph : ISchemaClass<CMotionGraph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ConfigCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraph.cs#L28)

```csharp
ref int ConfigCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ConfigStartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraph.cs#L26)

```csharp
ref int ConfigStartIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Loop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraph.cs#L30)

```csharp
ref bool Loop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ParamSpans** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraph.cs#L16)

```csharp
CParamSpanUpdater ParamSpans { get; }
```

#### Property Value

- [CParamSpanUpdater](/docs/api/shared/schemadefinitions/cparamspanupdater)

**ParameterCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraph.cs#L24)

```csharp
ref int ParameterCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RootNode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraph.cs#L22)

```csharp
SchemaUntypedField RootNode { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**Tags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionGraph.cs#L19)

```csharp
ref CUtlVector Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

