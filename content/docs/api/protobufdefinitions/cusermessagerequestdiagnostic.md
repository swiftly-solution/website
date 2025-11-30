---
title: CUserMessageRequestDiagnostic
---

# Interface CUserMessageRequestDiagnostic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageRequestDiagnostic.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMessageRequestDiagnostic : ITypedProtobuf<CUserMessageRequestDiagnostic>, INativeHandle, INetMessage<CUserMessageRequestDiagnostic>, IDisposable
```

#### Implements

- [ITypedProtobuf<CUserMessageRequestDiagnostic>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CUserMessageRequestDiagnostic>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Diagnostics

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageRequestDiagnostic.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessageRequestDiagnostic_Diagnostic> Diagnostics { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CUserMessageRequestDiagnostic_Diagnostic](/docs/api/protobufdefinitions/cusermessagerequestdiagnostic_diagnostic)>

