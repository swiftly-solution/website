---
title: CQuaternionAnimParameter
---

```csharp
public interface CQuaternionAnimParameter : CConcreteAnimParameter, CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CConcreteAnimParameter>, ISchemaClass<CQuaternionAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DefaultValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CQuaternionAnimParameter.cs#L18)

```csharp
ref Quaternion DefaultValue { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### Interpolate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CQuaternionAnimParameter.cs#L20)

```csharp
ref bool Interpolate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

